import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions/orderActions";
import totalCurrency from "./TotalCurrency";


class Order extends Component {
    componentDidMount() {
      this.props.fetchOrders();
    }
    render() {
      const { orders } = this.props;
      return !orders ? (
        <div>Orden de compra</div>
      ) : (
        <div className="orders">
          <h2>Orden de compra</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>NAME</th>
                <th>ITEMS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.createdAt}</td>
                  <td> {totalCurrency(order.total)}</td>
                  <td>{order.name}</td>
                  <td>
                    {order.cartItems.map((item) => (
                      <div>
                        {item.count} {" x "} {item.title}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default connect(
    (state) => ({
      orders: state.order.orders,
    }),
    {
      fetchOrders,
    }
  )(Order);