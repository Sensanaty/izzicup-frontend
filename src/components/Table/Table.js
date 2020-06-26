import React, {Component} from 'react';

class Table extends Component {
    setRows = () => {
        const parts = this.props.parts;
        return parts.map((part, index) => {
            return <tr key={index}>
                <RenderRow data={part} />
            </tr>
        })
    }

    render() {
        return (
            <table className="parts-table">
                <thead>
                <tr className="header-group">
                    <th colSpan="5">Part Details</th>
                    <th colSpan="3">Availability</th>
                    <th colSpan="9">Prices & Costs</th>
                    <th colSpan="3">Miscellaneous</th>
                </tr>
                <tr className="header-names">
                    <th>Part Number</th>
                    <th>Owner</th>
                    <th>Date Added</th>
                    <th>Description</th>
                    <th>Condition</th>
                    <th>Available</th>
                    <th>Reserved</th>
                    <th>Sold</th>
                    <th>Min Order</th>
                    <th>Min Cost</th>
                    <th>Min Price</th>
                    <th>Med Order</th>
                    <th>Med Cost</th>
                    <th>Med Price</th>
                    <th>Max Order</th>
                    <th>Max Cost</th>
                    <th>Max Price</th>
                    <th>Lead Time</th>
                    <th>Quote Type</th>
                    <th>Tag</th>
                </tr>
                </thead>

                <tbody>
                    {this.setRows()}
                </tbody>
            </table>
        );
    }
}

const RenderRow = (props) => {
    const part_details = props.data.attributes

    return (
        <>
            <td>{part_details["part_number"]}</td>
            <td>{part_details["owner"]}</td>
            <td>{part_details["formatted_date_added"]}</td>
            <td>{part_details["description"]}</td>
            <td>{part_details["condition"]}</td>
            <td>{part_details["available"]}</td>
            <td>{part_details["reserved"]}</td>
            <td>{part_details["sold"]}</td>
            <td>{part_details["order_min"]}</td>
            <td>{part_details["cost_min"]}</td>
            <td>{part_details["price_min"]}</td>
            <td>{part_details["order_med"]}</td>
            <td>{part_details["cost_med"]}</td>
            <td>{part_details["price_med"]}</td>
            <td>{part_details["order_max"]}</td>
            <td>{part_details["cost_max"]}</td>
            <td>{part_details["price_max"]}</td>
            <td>{part_details["lead_time"]}</td>
            <td>{part_details["quote_type"]}</td>
            <td>{part_details["tag"]}</td>
        </>
    )
}

export default Table;