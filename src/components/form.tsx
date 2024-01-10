import React from "react";

const Form = () => {
    return (
        <div className="card w-10/12 h-28 bg-base-100 shadow-xl m-10">
            <div className="card-body flex">
                <div className="form-wrap flex justify-center">
                    <input type="text" placeholder="今なにしてる？" className="input input-bordered w-full max-w-3xl flex" />
                    <div className="card-actions ml-3">
                        <button className="btn btn-neutral">投稿</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;