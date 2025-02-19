import { createContext, ReactNode } from "react"


interface userContext {
  username: string|null,
  email: string
}
export const UserContext = createContext<userContext>({
  username: "",
  email: ""
})

const UserContextProvider = ({ children,user }: { children: ReactNode,user:userContext }) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
