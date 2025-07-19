import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

type MenuContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export const MenuContext = createContext<MenuContextType | undefined>(undefined)

type MenuContextProviderProps = {
    children: ReactNode;
}

const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const value = {
        isMenuOpen, setIsMenuOpen
    }
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider