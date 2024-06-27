import React, { useEffect, useState } from "react";
import axios from "axios";

const FAQs = () => {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("")
  const [FAQsArr, setFAQsArr] = useState([])

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/api/faqs", { ques, ans });
      alert(res.data);
      window.location.reload();
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  const fetchFAQs = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/api/fetch-faqs")
      setFAQsArr(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchFAQs()
  }, [])

  return (
    <div>
      <h1 className="text-center text-white bg-success">Help & FAQs</h1>
      <div class="m-2 p-2">
        <form onSubmit={submitHandler}>
          <label className="form-label">Any help or Question?</label>
          <textarea
            onChange={(e) => setQues(e.target.value)}
            placeholder="Enter your Question here...."
            className="form-control"
          ></textarea>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
      <h4 className="m-2">Previously Asked Questions</h4>
      <div>
        {FAQsArr.map((item, index) => (
          <div key={index} className="card m-2 p-2">
            <p className="fs-4">
              <b>Q. </b>
              {item.ques}
            </p>
            <p>
              <b>Ans. </b>
              {item.ans}
              {item.ans == "" ? (
                <span class="badge text-bg-secondary m-2">
                  Not Answered yet
                </span>
              ) : (
                <span class="badge text-bg-warning m-2">Answered by Admin</span>
              )}
            </p>
            <form onSubmit className="">
              <input type="text" className="form-control" placeholder="Answer" />
            <button className="btn btn-outline-success">Answer</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
