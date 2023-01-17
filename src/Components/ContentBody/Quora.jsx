import React from 'react'

const Quora = () => {
    return (
        <div className="quora">
          <QHeader />
          <div className="quora__content">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      );
    }


export default Quora