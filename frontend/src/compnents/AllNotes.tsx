import { useRecoilState } from "recoil";
import { allNotes, Note } from "../recoil";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BROSWER_URL } from "../config";
import { SkeletonNote } from "./SkeletonNote";
import { NoData } from "./NoData";
import { Error } from "./Error";
import { OneNote } from "./OneNote";

type AllNotesProps = {
  query: string;
};

const AllNotes: React.FC<AllNotesProps> = ({ query }) => {
  const [notes, setNotes] = useRecoilState(allNotes);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingNewNotes, setLoadingNewNotes] = useState(false);
  const loaderRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BROSWER_URL}/api/v1/note?queryString=${query}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
        setisLoading(false);
      })
      .catch((error: any) => {
        setError({
          msg: error.response?.data.message || "Something went wrong",
          isVisible: true,
        });
        setisLoading(false);
        console.log(error);
      });
  }, []);

  let timeoutId: ReturnType<typeof setTimeout>;
  const debouncedFetchNotes = () => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      fetchNotes();
    }, 400);
  };

  const fetchNotes = () => {
    if (page == 1) {
      return;
    }
    console.log("fetching");
    setLoadingNewNotes(true);
    axios
      .get(`${BROSWER_URL}/api/v1/note?page=${page}&queryString=${query}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.notes.length == 0) {
          setHasMore(false);
        } else {
          setNotes((notes) => [...notes, ...res.data.notes]);
          console.log(res.data.notes);
        }
        setLoadingNewNotes(false);
      })
      .catch((error: any) => {
        setError({
          msg: error.response?.data.message || "Something went wrong",
          isVisible: true,
        });
        setLoadingNewNotes(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (hasMore) {
      debouncedFetchNotes();
      console.log("here");
    }
  }, [page]);

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, notes]);
  if (isLoading) {
    return (
      <>
        <SkeletonNote />
        <SkeletonNote />
        <SkeletonNote />
      </>
    );
  }
  if (notes.length == 0) {
    return (
      <div className="mt-10">
        <NoData title="No notes." />
      </div>
    );
  }
  return (
    <div>
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      {notes.map((note: Note) => {
        return <OneNote key={note.id} {...note} />;
      })}
      <div ref={loaderRef} className="flex justify-center mt-10">
        {loadingNewNotes ? (
          <div className="text-sm font-bold">Loading more notes...</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AllNotes;
