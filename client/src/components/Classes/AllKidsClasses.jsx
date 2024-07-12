import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AllKidsClasses = () => {
  const navigate=useNavigate();
  const [kids, setKids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKidsClasses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/get-class', {
          params: { category: 'Kids Classes' },
        });
        console.log(response.data);
        setKids(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch kids classes');
      } finally {
        setLoading(false);
      }
    };
    fetchKidsClasses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleEnroll=(id)=>{
        navigate(`/payment/${id}`);
  }

  return (
    <div className="container mt-3">
    <a href="/kids-classes" className="btn btn-dark mb-3">Back</a>
    <h1 className="text-danger mb-4">All Kids Classes</h1>
    {kids.length === 0 ? (
      <p>No kids classes available</p>
    ) : (
      <div className="row">
        {kids.map((kidClass) => (
          <div key={kidClass.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{kidClass.description}</h5>
                <p className="card-text"><strong>Trainer:</strong> {kidClass.Trainer}</p>
                <p className="card-text"><strong>Type:</strong> {kidClass.category}</p>
                <p className="card-text"><strong>Date:</strong> {kidClass.date}</p>
                <p className="card-text"><strong>Fees:</strong> {kidClass.price}</p>
                <button 
                  className="btn btn-success" 
                  onClick={() => handleEnroll(kidClass.id)}
                >
                  Enroll in class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default AllKidsClasses;
