import {Table, Tag, Image} from "antd";
import {transformStatusToTag} from "../utils";
import {MdOutlineSearch} from "react-icons/md";
import {Input} from "antd";

const ListTable = () => {

    const dataSource = [
        {
            key: "1",
            customer: "John Smith",
            age: 32,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Cash on delivery",
            status: "Pending",
            date: "1 March",
            product: "Acer Nitro 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "2",
            customer: "John Smith",
            age: 20,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online Payment",
            status: "Approved",
            date: "1 March",
            product: "PlayStation 5",
            id: "#12345"
        },
        {
            key: "3",
            customer: "John Smith",
            age: 18,
            address: '10 Downing Street',
            amount: 500,
            img: "https://cdn-images-1.medium.com/fit/c/400/400/1*4CejnJuXiqQd4Gt2NrgNQg.jpeg",
            method: "Online",
            status: "Rejected",
            date: "1 March",
            product: "Acer Nitro 5",
            id: "#12345"
        }
    ];

    const columns = [
        {
            title: 'Tracking ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            filterDropdown: () => {
                return <Input
                    autoFocus
                    onPressEnter={() => console.log("clicked")}
                    placeholder={"Search Products..."}

                />
            },
            filterIcon: () => {
                return <MdOutlineSearch/>
            }

        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customers',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Payment Method',
            dataIndex: 'method',
            key: 'method',
        },
        {
            title: 'Status',
            key: 'status',
            render: (row) => {
                return <Tag color={transformStatusToTag(row?.status)}>
                    {row?.status}
                </Tag>
            }
        },
        {
            title: 'Attachment',
            key: 'image',
            render: (row) => {
                return <Image style={{objectFit: "cover", borderRadius: "50%"}} width={60} height={60} src={row?.img}/>
            }
        },
    ]

    const getColumnSearchProps = (dataIndex) => {

    }

    return (
        <div className={"table"}>
            <Table columns={columns} dataSource={dataSource} pagination={false}/>
        </div>
    );
};

export default ListTable;