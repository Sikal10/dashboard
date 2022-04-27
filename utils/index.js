export const transformStatusToTag = (status) => {
    switch (status) {
        case "Approved":
            return "success";
        case "Rejected":
            return "error";
        case "Pending":
            return "processing";
        case "failed":
            return "error";
        default:
            return "processing";
    }
}