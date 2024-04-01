import { create } from "zustand"

interface LocalStore {
  hasRead: boolean
  setHasRead: (read: boolean) => void
}
export const useLocalStore = create<LocalStore>(set => ({
  hasRead: localStorage.getItem("hasRead") === "yes",
  setHasRead: (read: boolean) => {
    const result = read ? "yes" : "no"
    localStorage.setItem("hasRead", result)
    set(() => ({ hasRead: result === "yes" }))
  },
}))
