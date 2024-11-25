import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/axiosConfig';  // 导入你配置好的 Axios 实例

function openFile(url) {
    window.open(url, 'newwindow', 'width=5000,height=3000,screenX=300,screenY=100');
}

const DetailsPage = () => {
    const { sid } = useParams();
    const [ad, setAd] = useState({});

    useEffect(() => {
        // 使用 Axios 获取 item 详情
        api.get(`/item/detail/${sid}`)
            .then((response) => {
                if (response.data && response.data.code === 1) {
                    setAd(response.data.data);
                } else {
                    console.error('Error fetching item details:', response.data.msg);
                }
            })
            .catch((err) => console.error('Error fetching item details:', err));
    }, [sid]);

    return (
        <div>
            <section>
                <div style={{ margin: '20px' }}>
                    <table className="content">
                        <tbody>
                            <tr className="body">
                                <td className="pic">
                                    {['jpg', 'png'].includes(ad.fileFormat?.toLowerCase()) ? (
                                        <a href="#" onClick={() => openFile(ad.url)}>
                                            <img src={ad.url} title="Click to view" alt="Item" />
                                        </a>
                                    ) : (
                                        <a href="#" onClick={() => openFile(ad.url)}>
                                            <img src="/static/asset/documentImage.png" className="notImage" title="Click to view" alt="Not an image" />
                                        </a>
                                    )}

                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-secondary" onClick={() => openFile(ad.url)}>View</button>
                                    </div>
                                </td>

                                <td className="detail">
                                    <div className="heading">{ad.title}</div>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="label">Description:</td>
                                                    <td colSpan="3">{ad.description}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Publisher:</td>
                                                    <td>{ad.author}</td>
                                                    <td className="label">Publish Date:</td>
                                                    <td>{ad.publishDate}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Category:</td>
                                                    <td>{ad.category}</td>
                                                    <td className="label">Car model:</td>
                                                    <td>{ad.model}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Language:</td>
                                                    <td>{ad.language}</td>
                                                    <td className="label">Identifier:</td>
                                                    <td>{ad.sid}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Creator:</td>
                                                    <td>{ad.author}</td>
                                                    <td className="label">Contributor email:</td>
                                                    <td>{ad.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Contributor:</td>
                                                    <td>{ad.contributor}</td>
                                                    <td className="label">Rights:</td>
                                                    <td>{ad.rights}</td>
                                                </tr>
                                                <tr>
                                                    <td className="label">Source:</td>
                                                    <td>{ad.source}</td>
                                                    <td className="label">Relation:</td>
                                                    <td>{ad.relation}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
            </section>

            <h5>You may also be interested in</h5>
            <div className="interest_container">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="col d-flex justify-content-center interest_item">
                        <div className="card mb-3 mt-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="http://rovercarclubaust.asn.au/wp-content/uploads/2015/01/rccabadge.jpg"
                                        className="img-fluid rounded-start"
                                        alt="Interest item"
                                        width="20px"
                                        height="20px"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="result1.html" className="titlelink">
                                                "Rover One Of Britains Fine Cars"
                                            </a>
                                        </h5>
                                        <p className="card-text">Author: Herald</p>
                                        <p className="card-text">
                                            <small className="text-muted">24/06/1949</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsPage;
