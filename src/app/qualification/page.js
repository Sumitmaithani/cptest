"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
import moment from "moment";

const page = () => {
  const [data, setData] = React.useState([]);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/topics");
      setData(res.data.topics);
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="mt-20">
      {data
        ?.slice(0)
        .reverse()
        .map((t) => (
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div className="flex gap-3">
              <FaUniversity size={54} />
              <div>
                <h2 className="font-bold text-2xl">{t.School}</h2>
                <div className="flex gap-2">
                  <div>{t.Degree}</div>,<div>{t.FieldOfStudy}</div>
                </div>
                <div className="flex gap-2">
                  <div>{moment.utc(t.StartDate).format("MMM Do, YYYY")}</div> -
                  <div>{moment.utc(t.EndDate).format("MMM Do, YYYY")}</div>
                </div>
                <div className="flex items-center text-center">
                  <div className="tag-containerless">
                    {t.Subjects.map((tag, index) => {
                      return (
                        <div key={index} className="tag">
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
