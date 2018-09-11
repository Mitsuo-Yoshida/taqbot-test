export interface NavigationProps {
    navigator?: {
        push: (params: any) => void;
        pop: () => void;
    }
}