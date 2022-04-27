import React, {useState} from 'react';
import {Image, Table, Tag, Button, Space, Row} from "antd";
import Link from "next/link";

const UsersTable = () => {
    const dataSource = [
        {
            key: "1",
            user: "John Smith",
            age: 32,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Pending",
            id: "1",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "2",
            user: "John Smith",
            age: 20,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "2",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "3",
            user: "John Smith",
            age: 20,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "3",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "4",
            user: "John Smith",
            age: 20,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "4",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "5",
            user: "John Smith",
            age: 20,
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "5",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "6",
            user: "John Smith",
            age: 20,
            amount: 500,
            status: "Approved",
            id: "6",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "7",
            user: "John Doe",
            age: 20,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "7",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "8",
            user: "Jane Doe",
            age: 20,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Approved",
            id: "8",
            email: "devsikal.ss@gmail.com"
        },
        {
            key: "9",
            user: "John Smith",
            age: 18,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            status: "Rejected",
            id: "9",
            email: "devsikal.ss@gmail.com"
        }
    ];

    const [data, setData] = useState(dataSource);
    const [loading, setLoading] = useState(false);

    const removeUser = (id) => {
        setLoading(true);
        const undeletedUsers = data.filter((data, index) => data.id !== id);
        setData(undeletedUsers);
        setLoading(false);
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User',
            key: 'user',
            render: (row) => {
                return <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                    <Image src={row.img} width={50} height={50} style={{objectFit: "center", borderRadius: "50%"}} />
                    <p>{row.user}</p>
                </div>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (row) => {
                return <Space>
                    <Button>
                        <Link href={`/users/${row?.id}`}>
                            View
                        </Link>
                    </Button>

                    <Button onClick={() => removeUser(row?.id)}>
                        Delete
                    </Button>
                </Space>
            }
        },
    ];

    return (
        <div>
            <Table loading={loading} columns={columns} dataSource={data} />
        </div>
    );
};

export default UsersTable;