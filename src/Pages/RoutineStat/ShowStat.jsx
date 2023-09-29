import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import LoadingComponent from '../Components/LoadingComponent';
import { CourseCount } from './CourseCount';
import { TeacherClassCount } from './TeacherClassCount';

const ShowStat = () => {
  const { course_id } = useParams();
  const location = useLocation();
  const state = location.state;
  const [course, setCourse] = useState({});
  const [routine, setRoutine] = useState({});
  const [courseCounts, setCourseCounts] = useState({});
  const [teacherCounts, setTeacherCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!course_id) return;
    async function getResults() {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/v1/class/${course_id}`
        );
        setCourse({ ...data.result.courses });
        const courseCounts = {};
        const teacherCounts = {};

        for (const dayKey in state) {
          const day = state[dayKey];
          for (const slotKey in day) {
            const slot = day[slotKey];
            for (const periodKey in slot) {
              const period = slot[periodKey];
              if (period.courseShortForm) {
                courseCounts[period.courseShortForm] =
                  (courseCounts[period.courseShortForm] || 0) + 1;
              }
              if (period.instructor1) {
                teacherCounts[period.instructor1] =
                  (teacherCounts[period.instructor1] || 0) + 1;
              }
              if (period.instructor2) {
                teacherCounts[period.instructor2] =
                  (teacherCounts[period.instructor2] || 0) + 1;
              }
            }
          }
        }

        setCourseCounts(courseCounts);
        setTeacherCounts(teacherCounts);
        setLoading(false);
      } catch (error) {
        toast.error("Can't get routine. Check network");
      }
    }
    getResults();
  }, [course_id, state]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex items-center justify-center gap-5 min-h-[90vh]">
      <div className="">
        <CourseCount courseCounts={courseCounts} />
      </div>
      <div className="">
        <TeacherClassCount teacherCounts={teacherCounts} />
      </div>
    </div>
  );
};

export default ShowStat;
