<div className="flex">
  <p className="w-32 text-center flex items-center justify-center border-[2px]  border-blue-gray-400">
    Mon
  </p>
  <div className="w-full h-full text-center grid grid-cols-3">
    {/* slot 1 */}
    <div className="w-full">
      {mon.slot1.haveData ? (
        <>
          {mon.slot1.isMul ? (
            <div className="grid grid-cols-3">
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot1.period1.courseShortForm}</p>
                <p>
                  {mon.slot1.period1.Instructor.length > 1 ? (
                    <span>
                      {mon.slot1.period1.Instructor[0]} /{' '}
                      {mon.slot1.period1.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot1.period1.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot1.period1.roomNo}</span>
                  </p>
                </p>
              </div>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot1.period2.courseShortForm}</p>
                <p>
                  {mon.slot1.period2.Instructor.length > 1 ? (
                    <span>
                      {mon.slot1.period2.Instructor[0]} /{' '}
                      {mon.slot1.period2.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot1.period2.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot1.period2.roomNo}</span>
                  </p>
                </p>
              </div>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot1.period3.courseShortForm}</p>
                <p>
                  {mon.slot1.period3.Instructor.length > 1 ? (
                    <span>
                      {mon.slot1.period3.Instructor[0]} /{' '}
                      {mon.slot1.period3.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot1.period3.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot1.period3.roomNo}</span>
                  </p>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot1.period1.courseShortForm}</p>
                <p>
                  {mon.slot1.period1.Instructor.length > 1 ? (
                    <span>
                      {mon.slot1.period1.Instructor[0]} /{' '}
                      {mon.slot1.period1.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot1.period1.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot1.period1.roomNo}</span>
                  </p>
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3 h-full">
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
        </div>
      )}
    </div>

    {/* slot 2 */}
    <div className="">
      {mon.slot2.haveData ? (
        <>
          {mon.slot2.isMul ? (
            <div className="grid grid-cols-3">
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot2.period3.courseShortForm}</p>
                <p>
                  {mon.slot2.period3.Instructor.length > 1 ? (
                    <span>
                      {mon.slot2.period3.Instructor[0]} /{' '}
                      {mon.slot2.period3.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot2.period3.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot2.period3.roomNo}</span>
                  </p>
                </p>
              </div>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot2.period3.courseShortForm}</p>
                <p>
                  {mon.slot2.period3.Instructor.length > 1 ? (
                    <span>
                      {mon.slot2.period3.Instructor[0]} /{' '}
                      {mon.slot2.period3.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot2.period3.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot2.period3.roomNo}</span>
                  </p>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot2.period1.courseShortForm}</p>
                <p>
                  {mon.slot2.period1.Instructor.length > 1 ? (
                    <span>
                      {mon.slot2.period1.Instructor[0]} /{' '}
                      {mon.slot2.period1.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot2.period1.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot2.period1.roomNo}</span>
                  </p>
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3 h-full">
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
        </div>
      )}
    </div>

    {/* slot 3 */}
    <div className="">
      {mon.slot3.haveData ? (
        <>
          {mon.slot3.isMul ? (
            <div className="grid grid-cols-3">
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot3.period3.courseShortForm}</p>
                <p>
                  {mon.slot3.period3.Instructor.length > 1 ? (
                    <span>
                      {mon.slot3.period3.Instructor[0]} /{' '}
                      {mon.slot3.period3.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot3.period3.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot3.period3.roomNo}</span>
                  </p>
                </p>
              </div>
              <div className="border-[2px]  border-blue-gray-400">
                <p>{mon.slot3.period3.courseShortForm}</p>
                <p>
                  {mon.slot3.period3.Instructor.length > 1 ? (
                    <span>
                      {mon.slot3.period3.Instructor[0]} /{' '}
                      {mon.slot3.period3.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot3.period3.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot3.period3.roomNo}</span>
                  </p>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="border-[2px] border-blue-gray-400">
                <p>{mon.slot3.period1.courseShortForm}</p>
                <p>
                  {mon.slot3.period1.Instructor.length > 1 ? (
                    <span>
                      {mon.slot3.period1.Instructor[0]} /{' '}
                      {mon.slot3.period1.Instructor[1]}{' '}
                    </span>
                  ) : (
                    <span>{mon.slot3.period1.Instructor[0]}</span>
                  )}
                  <p>
                    <span>{mon.slot3.period1.roomNo}</span>
                  </p>
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3 h-full">
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div>
        </div>
      )}
    </div>
  </div>
</div>;
