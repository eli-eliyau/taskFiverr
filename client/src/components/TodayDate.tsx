import React from "react";

const TodayDate: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('he-IL'); 

  return (
    <div>
      <h3>last updated at:{formattedDate}</h3>
    </div>
  );
};

export default TodayDate;