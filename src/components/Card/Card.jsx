import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SearchButton from "../SearchButton/SearchButton";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [values, setValue] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [singleData, setSingleData] = useState({});

  const handleSort = () => {
    const sortedData = values.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setValue([...values, sortedData]);
  };

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      setValue(data.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <span onClick={handleSort}>
        <SearchButton>Sort By Date</SearchButton>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 gap-4 my-6">
        {values.slice(0, showAll ? 12 : 6).map((value) => {
          return (
            <SingleCard
              setUniqueId={setUniqueId}
              value={value}
              key={value.id}
            />
          );
        })}
      </div>
      {!showAll && (
        <span onClick={() => setShowAll(true)}>
          <SearchButton>See More</SearchButton>
        </span>
      )}
      <Modal singleData={singleData} />
    </>
  );
};

export default Card;
