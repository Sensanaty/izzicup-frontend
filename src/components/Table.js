import React from "react";
import {useTable} from "react-table";

const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

function MakeTable(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const columns = React.useMemo(
        () => [
            {
                Header: 'Part Details',
                    columns: [
                        {
                            Header: 'Part Number',
                            accessor: 'attributes.part_number'
                        },
                        {
                            Header: 'Owner',
                            accessor: 'attributes.owner'
                        },
                        {
                            Header: 'Date Added',
                            accessor: 'attributes.formatted_date_added'
                        },
                        {
                            Header: 'Description',
                            accessor: 'attributes.description'
                        },
                        {
                            Header: 'Condition',
                            accessor: 'attributes.condition'
                        }
                    ]
            },
            {
                Header: 'Availability',
                columns: [
                    {
                        Header: 'Available',
                        accessor: 'attributes.available'
                    },
                    {
                        Header: 'Reserved',
                        accessor: 'attributes.reserved'
                    },
                    {
                        Header: 'Sold',
                        accessor: 'attributes.sold'
                    }
                ]
            },
            {
                Header: 'Prices & Costs',
                columns: [
                    {
                        Header: 'Min Order',
                        accessor: 'attributes.order_min'
                    },
                    {
                        Header: 'Min Cost',
                        accessor: 'attributes.cost_min'
                    },
                    {
                        Header: 'Min Price',
                        accessor: 'attributes.price_min'
                    },
                    {
                        Header: "Med Order",
                        accessor: 'attributes.order_med'
                    },
                    {
                        Header: "Med Cost",
                        accessor: 'attributes.cost_med'
                    },
                    {
                        Header: "Med Price",
                        accessor: 'attributes.price_med'
                    },
                    {
                        Header: "Max Order",
                        accessor: 'attributes.order_max'
                    },
                    {
                        Header: "Max Cost",
                        accessor: 'attributes.cost_max'
                    },
                    {
                        Header: "Max Price",
                        accessor: 'attributes.price_max'
                    },
                ]
            },
            {
                Header: "Miscellaneous",
                columns: [
                    {
                        Header: "Lead Time",
                        accessor: 'attributes.lead_time'
                    },
                    {
                        Header: 'Quote Type',
                        accessor: 'attributes.quote_type'
                    },
                    {
                        Header: "Tag",
                        accessor: 'attributes.tag'
                    }
                ]
            }
        ],
        []
    )

    return (
        <Table columns={columns} data={props.parts} />

    )
}

export default MakeTable;