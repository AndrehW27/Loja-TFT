import '../styles/loading.css';

export default function Loading() {
  return (
    <div className="loadingContainer">
      <div className="loadingImg"></div>
      <div>
        <p>Loading</p> 
        <p id="pontoUm">.</p>
      </div>
    </div>
  );
}


