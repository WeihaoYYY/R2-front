import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImageUrl = "https://wy-dev.s3.ap-southeast-2.amazonaws.com/r2/images/items/documentImage.png";


  // 使用 useEffect 钩子在组件加载时发送请求
  useEffect(() => {
    // 使用 axios 发送 GET 请求到 /item/index
    const fetchItems = async () => {
      try {
        // 调用后端 API 获取数据
        const response = await axios.get('http://localhost:8081/api/item/index');
        // 假设你的响应数据在 response.data.data 中
        console.log(response.data.data);
        console.log(response.data.data[0].url);
        setItems(response.data.data);
      } catch (error) {
        setError('Failed to fetch items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // 空数组作为依赖项，表示只在组件挂载时执行一次

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {items.map((item) => (
          <div className="col d-flex justify-content-center" key={item.sid}>
            <div className="card mb-3 mt-3" style={{ width: '800px' }}>
              <div className="row g-0">
                {/* 左侧文字内容 */}
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href={`/item/detail/${item.sid}`} className="titlelink">
                        {item.title}
                      </a>
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">Description: {item.description}</small>
                    </p>
                    <p className="card-text">Category: {item.category}</p>
                    <p className="card-text">Publisher: {item.contributor}</p>
                    <p className="card-text">
                      <small className="text-muted">Publish Date: {item.publish_date}</small>
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="image-container">
                    {item.sourceType === 'image' ? (
                      <img
                        src={item.url}
                        className="img-fluid img-uniform-size"
                        alt="list_image"
                      />
                    ) : (
                      <img
                        src={defaultImageUrl}
                        className="img-fluid img-uniform-size"
                        alt="list_image"
                      />
                    )}
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

export default ItemList;
