export interface DialogConfig {
    title: string;
    fields: {
        name: string;
    }[];
    acceptCallback: () => void;
    acceptLabel?: string;
    rejectLabel?: string;
}