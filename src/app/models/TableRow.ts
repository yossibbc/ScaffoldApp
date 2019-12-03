export interface TableRow {
    data: Date;
    propertyAddress: string;
    ownerName: string;
    tenantName: string;
    projectCategory?: string;
    status: StatusEnum;
}

export enum StatusEnum {
    New = 0,
    Approved = 1,
    Rejected = 2,
    Completed = 3
}
