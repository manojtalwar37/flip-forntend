import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [navbar, setnavbar] = useState([]);
  useEffect(() => {
    getcategories();
  }, []);
  async function getcategories() {
    const res = await axios.get("http://127.0.0.1:5000/categories");
    setnavbar(res.data);
    console.log(res);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="card w-100">
          <div className="row">
            <div className="col">
              <ul className="nav justify-content-between text-center ps-3 pe-3">
                {navbar.map((item) => 

                    <li className="nav-item"><a href={"/Productcat/"+item._id}>
                      <img src={item.image} className="w-100" />
                      <h6>{item.name}</h6></a>
                    </li>
                    )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card w-100 mt-2">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="assets/images/product/slider11.webp"
                      className="d-block w-100 object-fit-cover"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/product/slider12.webp"
                      className="d-block w-100 object-fit-cover"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/images/product/slider3.webp"
                      className="d-block w-100 object-fit-cover"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="goes mt-2 " style={{ backgroundColor: "white" }}>
            <div className="go mt-2 d-flex">
              <div className="col">
                <div className="card-group w-100">
                  <div className="card text-center">
                    <h2 className="card-title">Best of Electronics</h2>
                    <div className="dsfsa p-4">
                      <button type="button" className="btn btn-primary">
                        View All
                      </button>
                    </div>
                    <img src="assets/images/product/img14.png" className="w-100 object-fit-cover" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card "
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img16.png" className="w-75 object-fit-cover" />
                    <h6>Top Mirrorless Camera</h6>
                    <h6>Shop Now!</h6>
                    <h6>Cannon Sony</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card "
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img15.png" className="w-75 object-fit-cover" />
                    <h6>Projectors</h6>
                    <h6>Shop Now!</h6>
                    <h6>ZEBRONICS</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card "
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img18.png" className="w-75 object-fit-cover" />
                    <h6>Monitors</h6>
                    <h6>Shop Now!</h6>
                    <h6>Lenovo</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card "
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/hp.webp" className="w-75 object-fit-cover" />
                    <h6>Printers</h6>
                    <h6>Shop Now!</h6>
                    <h6>HP</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="goes mt-2" style={{ background: "white" }}>
            <div className="go mt-2 d-flex">
              <div className="col">
                <div className="card-group " style={{ width: "100%" }}>
                  <div className="card text-center">
                    <h2 className="card-title">Books Toys or More</h2>
                    <div className="dsfsa p-4">
                      <button type="button" className="btn btn-primary">
                        View All
                      </button>
                    </div>
                    <img
                      src="assets/images/product/img19 (1).png"
                      className="w-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img19 (2).png" className="w-75" />
                    <h6>ROYAL ENFIELD F/F TPEX CAMO PRINTED</h6>
                    <h6>Shop Now!</h6>
                    <h6>Helmet  (GLOSS GREY)</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img19 (5).png" className="w-75" />
                    <h6>Toys World 3D Fast Steering</h6>
                    <h6>Shop Now!</h6>
                    <h6>Remote Car  (Red)</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img19 (3).png" className="w-75" />
                    <h6>BRANDONN Microfiber 250 GSM</h6>
                    <h6>Shop Now!</h6>
                    <h6>Cannon Sony</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img19 (4).png" className="w-70" />
                    <h6>JUSTICE LEAGUE Batman</h6>
                    <h6>Shop Now!</h6>
                    <h6>3 Inch Action Figure  (Black)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="goes mt-2" style={{ background: "white" }}>
            <div className="go mt-2 d-flex">
              <div className="col">
                <div className="card-group " style={{ width: "100%" }}>
                  <div className="card text-center">
                    <h2 className="card-title">Sports Healthcare &amp; More</h2>
                    <div className="dsfsa p-4">
                      <button type="button" className="btn btn-primary">
                        View All
                      </button>
                    </div>
                    <img
                      src="assets/images/product/img19 (1).png"
                      className="w-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img20.png" className="w-50" />
                    <h6>Tata Premium Tea Pouch</h6>
                    <h6>Shop Now!</h6>
                    <h6>(1.5 kg)</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img21.png" className="w-75" />
                    <h6>AmtiQ 2 in 1 Ring</h6>
                    <h6>Shop Now!</h6>
                    <h6> (Multicolor)</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img22.png" className="w-75" />
                    <h6>FITKIT by Cultsport FT98 Steel </h6>
                    <h6>Shop Now!</h6>
                    <h6>Sessions Treadmill</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img23.png" className="" />
                    <h6>MOTUL 7100 4T 20W-50Ester</h6>
                    <h6>Shop Now!</h6>
                    <h6>(1.5 L, Pack of 1)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="goes mt-2" style={{ background: "white" }}>
            <div className="go mt-2 d-flex">
              <div className="col">
                <div className="card-group " style={{ width: "100%" }}>
                  <div className="card text-center">
                    <h2 className="card-title">Pick Your Styles</h2>
                    <div className="dsfsa p-4">
                      <button type="button" className="btn btn-primary">
                        View All
                      </button>
                    </div>
                    <img
                      src="assets/images/product/img19 (1).png"
                      className="w-100 object-fit-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img26.png" className="" />
                    <h6>Flynn Analog Watch - For Men BQ1126</h6>
                    <h6>Shop Now!</h6>
                    <h6>FOSSIL </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img27.png" className="" />
                    <h6>High Tops For Men</h6>
                    <h6>Shop Now!</h6>
                    <h6>SFR </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img28.png" className="w-75" />
                    <h6>Travel Bag For Men</h6>
                    <h6>Shop Now!</h6>
                    <h6> (Black, Blue)</h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card p-3"
                  style={{ background: "transparent", border: "none" }}
                >
                  <div className="goes text-center">
                    <img src="assets/images/product/img25.png" className="w-50" />
                    <h6>MALABAR GOLD & DIAMONDS BIS Hallmark 18 Inches</h6>
                    <h6>Shop Now!</h6>
                    <h6>Gold Precious Chain  (22kt)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;