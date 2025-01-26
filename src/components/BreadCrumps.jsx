import React from 'react';

function BreadCrumps({ pageName }) {
  return (
    <div>
      {/* Title page */}
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: 'url("images/bg-01.jpg")', marginTop:'100px'}}>
        <h2 className="ltext-105 cl0 txt-center">
          {pageName}
        </h2>
      </section>
    </div>
  );
}

export default BreadCrumps;
