import React from "react";

const Modal = ({ singleData }) => {
  const { image_link, description, integrations, features } = singleData;
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body">
              <h2 className="card-title">
                {description ? description : "not found"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map((feature) => (
                    <p>
                      {" "}
                      {feature.feature_name
                        ? feature.feature_name
                        : "Not found"}
                    </p>
                  ))}
                  {/* {console.log(features[1])} */}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {/* {integrations.map((integration) => (
                    <p>{integration ? integration : "Not found"}</p>
                  ))} */}
                  {integrations &&
                    integrations.map((int) => <p>{int ? int : "not found"}</p>)}
                </div>
              </div>
            </div>
            <figure>
              <img
                className="w-full h-64"
                src={image_link && image_link[0]}
                alt="image"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
