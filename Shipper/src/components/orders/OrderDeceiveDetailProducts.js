import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default memo(function OrderDeceiveDetailProducts(props) {
    const { order, loading, content, onHandle } = props;

    const [valueContent, setValueContent] = useState('');

    useEffect(() => {
        if (content) {
            setValueContent(content);
        }
    }, [content]);

    if (!loading) {
        // Calculate Price
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(0);
        };

        order.itemsPrice = addDecimals(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0));
    }

    return (
        <table className="table border table-lg">
            <thead>
                <tr>
                    <th style={{ width: '40%' }}>Sản phẩm</th>
                    <th style={{ width: '15%' }}>Màu sắc</th>
                    <th style={{ width: '15%' }}>Đơn giá</th>
                    <th style={{ width: '15%' }}>Số lượng</th>
                    <th style={{ width: '15%' }} className="text-end">
                        Giá tiền
                    </th>
                </tr>
            </thead>
            <tbody>
                {order.orderItems.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <Link className="itemside" to="#">
                                <div className="left">
                                    <img
                                        src={`/productImage/${item?.image}`}
                                        alt={item.name}
                                        style={{ width: '40px', height: '40px' }}
                                        className="img-xs"
                                    />
                                </div>
                                <div className="info">{item.name}</div>
                            </Link>
                        </td>
                        <td>{item?.color}</td>
                        <td>{item?.price?.toLocaleString('de-DE')}đ </td>
                        <td>{item.qty} </td>
                        <td className="text-end"> {(item.qty * item.price)?.toLocaleString('de-DE')}đ</td>
                    </tr>
                ))}

                <tr>
                    {order?.errorPaid && (
                        <td>
                            <textarea
                                placeholder="Nội dung mà bạn muốn viết"
                                value={valueContent}
                                style={{ color: 'red' }}
                                onChange={(e) => setValueContent(e.target.value)}
                                rows="6"
                                className="form-control"
                            ></textarea>
                            <button className="btn btn-light" onClick={() => onHandle(valueContent)}>
                                Gửi
                            </button>
                        </td>
                    )}
                    <td colSpan="6">
                        <article className="float-end">
                            <dl className="dlist">
                                <dt className="fs-6" style={{ fontWeight: '600' }}>
                                    Tổng tiền:
                                </dt>{' '}
                                <dd className="fs-6" style={{ fontWeight: '600' }}>
                                    {Number(order.itemsPrice)?.toLocaleString('de-DE')}đ
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="fs-6" style={{ fontWeight: '600' }}>
                                    Mã giảm giá:
                                </dt>{' '}
                                <dd className="fs-6" style={{ fontWeight: '600' }}>
                                    -{order.discountPrice?.toLocaleString('de-DE')}đ
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="fs-6" style={{ fontWeight: '600' }}>
                                    Phí ship:
                                </dt>{' '}
                                <dd className="fs-6" style={{ fontWeight: '600' }}>
                                    {Number(order.shippingPrice)?.toLocaleString('de-DE')}đ
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="fs-6" style={{ fontWeight: '600' }}>
                                    Tổng cộng:
                                </dt>
                                <dd className="fs-5" style={{ fontWeight: '600' }}>
                                    {Number(order.totalPrice)?.toLocaleString('de-DE')}đ
                                </dd>
                            </dl>
                            <dl className="dlist">
                                <dt className="text-muted fs-6" style={{ fontWeight: '600' }}>
                                    Trạng thái:
                                </dt>
                                <dd>
                                    {order?.receive ? (
                                        <span className="badge alert-success">Đã nhận hàng</span>
                                    ) : order?.isDelivered && order.errorPaid ? (
                                        <span className="badge alert-danger">
                                            {' '}
                                            {order?.isPaid ? 'Đã thanh toán (giao thất bại)' : ' Giao hàng thất bại'}
                                        </span>
                                    ) : order?.isDelivered && order?.isPaid ? (
                                        <span className="badge rounded-pill alert-success">
                                            Đã thanh toán {order?.isDelivered ? '(đang giao)' : ''}
                                        </span>
                                    ) : (
                                        <span className="badge alert-success">Đang giao</span>
                                    )}
                                </dd>
                            </dl>
                        </article>
                    </td>
                </tr>
            </tbody>
        </table>
    );
});
