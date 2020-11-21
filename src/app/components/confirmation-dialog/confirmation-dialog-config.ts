export interface ConfirmationDialogConfig {
    title: string;
    message: string;
    acceptCallback: () => void;
    rejectLabel?: string;
    acceptLabel?: string;
}