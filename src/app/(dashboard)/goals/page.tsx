// Goals & Tasks Page
"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import toast from "react-hot-toast";
import {
    PlusIcon,
    CheckIcon,
    TrashIcon,
    FlagIcon,
} from "@heroicons/react/24/outline";

interface Goal {
    id: string;
    metricType: string;
    targetValue: number;
    currentValue: number;
    period: string;
    status: string;
    startDate: string;
    endDate: string;
}

interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate?: string;
    status: string;
    priority: string;
}

const metricLabels: Record<string, string> = {
    reach: "Reach",
    followers: "Followers",
    posts: "Posts",
    engagement: "Engagement %",
    views: "Views",
    revenue: "Revenue",
    impressions: "Impressions",
};

const periodLabels: Record<string, string> = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    quarterly: "Quarterly",
};

const priorityColors: Record<string, string> = {
    low: "bg-gray-500",
    medium: "bg-blue-500",
    high: "bg-yellow-500",
    urgent: "bg-red-500",
};

export default function GoalsPage() {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [showGoalModal, setShowGoalModal] = useState(false);
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [newGoal, setNewGoal] = useState({
        metricType: "reach",
        targetValue: 1000,
        period: "weekly",
    });
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        priority: "medium",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [goalsRes, tasksRes] = await Promise.all([
                fetch("/api/goals"),
                fetch("/api/tasks"),
            ]);
            const [goalsData, tasksData] = await Promise.all([
                goalsRes.json(),
                tasksRes.json(),
            ]);
            if (goalsData.success) setGoals(goalsData.data);
            if (tasksData.success) setTasks(tasksData.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateGoal = async () => {
        try {
            const res = await fetch("/api/goals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newGoal),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Goal created!");
                setShowGoalModal(false);
                fetchData();
            } else {
                toast.error(data.error || "Failed to create goal");
            }
        } catch (error) {
            toast.error("Failed to create goal");
        }
    };

    const handleCreateTask = async () => {
        if (!newTask.title.trim()) {
            toast.error("Task title is required");
            return;
        }
        try {
            const res = await fetch("/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Task created!");
                setShowTaskModal(false);
                setNewTask({ title: "", description: "", priority: "medium" });
                fetchData();
            } else {
                toast.error(data.error || "Failed to create task");
            }
        } catch (error) {
            toast.error("Failed to create task");
        }
    };

    const handleToggleTask = async (taskId: string, currentStatus: string) => {
        const newStatus = currentStatus === "done" ? "todo" : "done";
        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                fetchData();
                if (newStatus === "done") {
                    toast.success("Task completed! 🎉");
                }
            }
        } catch (error) {
            toast.error("Failed to update task");
        }
    };

    const handleDeleteTask = async (taskId: string) => {
        try {
            const res = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                toast.success("Task deleted");
                fetchData();
            }
        } catch (error) {
            toast.error("Failed to delete task");
        }
    };

    const groupedTasks = {
        todo: tasks.filter((t) => t.status === "todo"),
        in_progress: tasks.filter((t) => t.status === "in_progress"),
        done: tasks.filter((t) => t.status === "done"),
    };

    return (
        <div className="flex flex-col">
            <TopBar />

            <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-foreground">Goals & Tasks</h1>
                    <p className="text-foreground-muted">
                        Track your progress and manage daily tasks
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Goals Section */}
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-foreground">Goals</h2>
                            <button
                                onClick={() => setShowGoalModal(true)}
                                className="btn btn-primary flex items-center gap-1 py-1 text-sm"
                            >
                                <PlusIcon className="h-4 w-4" />
                                Add Goal
                            </button>
                        </div>

                        {loading ? (
                            <div className="space-y-3">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="skeleton h-24 rounded-lg" />
                                ))}
                            </div>
                        ) : goals.length === 0 ? (
                            <div className="card flex flex-col items-center py-12">
                                <FlagIcon className="mb-4 h-12 w-12 text-foreground-subtle" />
                                <p className="text-foreground-muted">No goals set</p>
                                <button
                                    onClick={() => setShowGoalModal(true)}
                                    className="btn btn-secondary mt-4"
                                >
                                    Create Your First Goal
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {goals.map((goal) => {
                                    const progress = Math.min(
                                        (goal.currentValue / goal.targetValue) * 100,
                                        100
                                    );
                                    return (
                                        <div key={goal.id} className="card p-4">
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="font-medium text-foreground">
                                                    {metricLabels[goal.metricType] || goal.metricType}
                                                </span>
                                                <span className="text-sm text-foreground-muted">
                                                    {periodLabels[goal.period]}
                                                </span>
                                            </div>
                                            <div className="mb-2 h-2 overflow-hidden rounded-full bg-background-tertiary">
                                                <div
                                                    className="h-full bg-gradient-streamlyte transition-all"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-foreground-muted">
                                                    {goal.currentValue.toLocaleString()} /{" "}
                                                    {goal.targetValue.toLocaleString()}
                                                </span>
                                                <span className="font-medium text-accent-primary">
                                                    {Math.round(progress)}%
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Tasks Section */}
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-foreground">Tasks</h2>
                            <button
                                onClick={() => setShowTaskModal(true)}
                                className="btn btn-primary flex items-center gap-1 py-1 text-sm"
                            >
                                <PlusIcon className="h-4 w-4" />
                                Add Task
                            </button>
                        </div>

                        {loading ? (
                            <div className="space-y-3">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="skeleton h-16 rounded-lg" />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {/* To Do */}
                                <div>
                                    <h3 className="mb-2 text-sm font-medium text-foreground-muted">
                                        To Do ({groupedTasks.todo.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {groupedTasks.todo.map((task) => (
                                            <TaskItem
                                                key={task.id}
                                                task={task}
                                                onToggle={() => handleToggleTask(task.id, task.status)}
                                                onDelete={() => handleDeleteTask(task.id)}
                                            />
                                        ))}
                                        {groupedTasks.todo.length === 0 && (
                                            <p className="text-sm text-foreground-subtle">No tasks</p>
                                        )}
                                    </div>
                                </div>

                                {/* In Progress */}
                                <div>
                                    <h3 className="mb-2 text-sm font-medium text-foreground-muted">
                                        In Progress ({groupedTasks.in_progress.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {groupedTasks.in_progress.map((task) => (
                                            <TaskItem
                                                key={task.id}
                                                task={task}
                                                onToggle={() => handleToggleTask(task.id, task.status)}
                                                onDelete={() => handleDeleteTask(task.id)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Done */}
                                <div>
                                    <h3 className="mb-2 text-sm font-medium text-foreground-muted">
                                        Done ({groupedTasks.done.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {groupedTasks.done.slice(0, 5).map((task) => (
                                            <TaskItem
                                                key={task.id}
                                                task={task}
                                                onToggle={() => handleToggleTask(task.id, task.status)}
                                                onDelete={() => handleDeleteTask(task.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Goal Modal */}
            {showGoalModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="card w-full max-w-md p-6">
                        <h2 className="mb-4 text-xl font-semibold text-foreground">
                            Create Goal
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Metric Type
                                </label>
                                <select
                                    value={newGoal.metricType}
                                    onChange={(e) =>
                                        setNewGoal({ ...newGoal, metricType: e.target.value })
                                    }
                                    className="input w-full"
                                >
                                    {Object.entries(metricLabels).map(([key, label]) => (
                                        <option key={key} value={key}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Target Value
                                </label>
                                <input
                                    type="number"
                                    value={newGoal.targetValue}
                                    onChange={(e) =>
                                        setNewGoal({
                                            ...newGoal,
                                            targetValue: parseInt(e.target.value) || 0,
                                        })
                                    }
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Period
                                </label>
                                <select
                                    value={newGoal.period}
                                    onChange={(e) =>
                                        setNewGoal({ ...newGoal, period: e.target.value })
                                    }
                                    className="input w-full"
                                >
                                    {Object.entries(periodLabels).map(([key, label]) => (
                                        <option key={key} value={key}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() => setShowGoalModal(false)}
                                className="btn btn-secondary flex-1"
                            >
                                Cancel
                            </button>
                            <button onClick={handleCreateGoal} className="btn btn-primary flex-1">
                                Create Goal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Task Modal */}
            {showTaskModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="card w-full max-w-md p-6">
                        <h2 className="mb-4 text-xl font-semibold text-foreground">
                            Create Task
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={newTask.title}
                                    onChange={(e) =>
                                        setNewTask({ ...newTask, title: e.target.value })
                                    }
                                    placeholder="What needs to be done?"
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Description (optional)
                                </label>
                                <textarea
                                    value={newTask.description}
                                    onChange={(e) =>
                                        setNewTask({ ...newTask, description: e.target.value })
                                    }
                                    placeholder="Add more details..."
                                    className="input w-full"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-foreground">
                                    Priority
                                </label>
                                <select
                                    value={newTask.priority}
                                    onChange={(e) =>
                                        setNewTask({ ...newTask, priority: e.target.value })
                                    }
                                    className="input w-full"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="urgent">Urgent</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={() => setShowTaskModal(false)}
                                className="btn btn-secondary flex-1"
                            >
                                Cancel
                            </button>
                            <button onClick={handleCreateTask} className="btn btn-primary flex-1">
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Task Item Component
function TaskItem({
    task,
    onToggle,
    onDelete,
}: {
    task: Task;
    onToggle: () => void;
    onDelete: () => void;
}) {
    const isDone = task.status === "done";

    return (
        <div
            className={`flex items-center gap-3 rounded-lg border border-border bg-background-secondary p-3 transition-all ${isDone ? "opacity-60" : ""
                }`}
        >
            <button
                onClick={onToggle}
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-all ${isDone
                        ? "border-accent-success bg-accent-success text-white"
                        : "border-border hover:border-accent-primary"
                    }`}
            >
                {isDone && <CheckIcon className="h-3 w-3" />}
            </button>
            <div className="min-w-0 flex-1">
                <p
                    className={`text-sm font-medium ${isDone ? "text-foreground-muted line-through" : "text-foreground"
                        }`}
                >
                    {task.title}
                </p>
            </div>
            <div
                className={`h-2 w-2 rounded-full ${priorityColors[task.priority] || "bg-gray-500"
                    }`}
            />
            <button
                onClick={onDelete}
                className="text-foreground-subtle hover:text-accent-error"
            >
                <TrashIcon className="h-4 w-4" />
            </button>
        </div>
    );
}
