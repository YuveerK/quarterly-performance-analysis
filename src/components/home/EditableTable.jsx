import React, { useEffect, useState } from "react";
import AddNewOfficerModal from "./AddNewOfficerModal";
import EditOfficerModal from "./EditOfficerModal";
import { NumericFormat } from "react-number-format";
import { db } from "../../firebase/index";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

const Spreadsheet = () => {
  const [data, setData] = useState([]);
  const [isAddNewOfficerModalClicked, setIsAddNewOfficerModalClicked] =
    useState(false);
  const [isEditOfficerModalClicked, setIsEditOfficerModalClicked] =
    useState(false);
  const [selectedOfficer, setSelectedOfficer] = useState({});

  useEffect(() => {
    const getOfficers = async () => {
      let officers = [];
      const querySnapshot = await getDocs(collection(db, "officers"));
      querySnapshot.forEach((doc) => {
        console.log(doc);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        officers.push(doc.data());
      });
      setData(officers);
    };
    getOfficers();
  }, []);

  const calculateTotalT = (officers) => {
    let sum = 0;

    officers.forEach((officer) => {
      sum +=
        officer.ar +
        officer.bj +
        officer.rpk +
        officer.pb_bac +
        officer.gen_tables;
    });

    return sum;
  };

  const calculateTotal = (officers) => {
    let sum = 0;

    officers.forEach((officer) => {
      sum +=
        officer.cashiering +
        officer.count +
        officer.technical +
        officer.security +
        officer.slots +
        officer.ar +
        officer.bj +
        officer.rpk +
        officer.pb_bac +
        officer.gen_tables;
    });

    return sum;
  };

  const calculateTotals = (group, columnName) => {
    let total = 0;
    let totalT = 0;
    let maxTotal = 0;
    data.forEach((officer) => {
      if (officer.group === group) {
        total += officer[columnName];
        totalT +=
          officer.ar +
          officer.bj +
          officer.rpk +
          officer.pb_bac +
          officer.gen_tables;
        maxTotal +=
          officer.cashiering +
          officer.count +
          officer.technical +
          officer.security +
          officer.slots +
          officer.ar +
          officer.bj +
          officer.rpk +
          officer.pb_bac +
          officer.gen_tables;
      }
    });

    return {
      total: parseInt(total),
      totalT: parseInt(totalT),
      maxTotal: parseInt(maxTotal),
    };
  };

  const groups = [...new Set(data.map((officer) => officer.group))];

  const handleNewOfficerData = async (payload) => {
    console.log(payload);

    await setDoc(
      doc(db, "officers", `${payload.officer}-${Date.now()}`),
      payload
    );
    setData((prev) => [...prev, payload]);
  };

  const handleCloseModal = (payload) => {
    setIsAddNewOfficerModalClicked(payload);
  };

  const handleCloseEditOfficerModal = (payload) => {
    setIsEditOfficerModalClicked(payload);
  };

  const handleUpdatedOfficerData = (payload) => {
    const newData = data;
    newData.splice(payload.index, 1, payload.data);
    setData(newData);
  };

  const editOfficerModal = (index, officer) => {
    setIsEditOfficerModalClicked(true);
    setSelectedOfficer({ index, officer });
  };

  return (
    <div className=" w-[80%] overflow-x-scroll">
      <button
        className="w-[150px] mb-8 bg-green-500 text-white p-2 rounded-md"
        onClick={() => setIsAddNewOfficerModalClicked(true)}
      >
        Add New Officer
      </button>
      <table width="100%">
        <thead className="text-left">
          <tr className="w-full">
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Officer
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Cashiering
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Count
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Technical
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Security
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Slots
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">AR</th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">BJ</th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">RPK</th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              PB/BAC
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              GEN (TABLES)
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Total (T)
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Total
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Breaches
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Detections
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Description
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Punter scans
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              System
            </th>
            <th className="p-2 w-[500px] bg-red-50 border border-black">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <React.Fragment key={group}>
              {data.map(
                (officer, index) =>
                  officer.group === group && (
                    <tr key={index}>
                      <td className="p-2 border border-black">
                        {officer.officer}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.cashiering}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.count}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.technical}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.security}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.slots}
                      </td>
                      <td className="p-2 border border-black">{officer.ar}</td>
                      <td className="p-2 border border-black">{officer.bj}</td>
                      <td className="p-2 border border-black">{officer.rpk}</td>
                      <td className="p-2 border border-black">
                        {officer.pb_bac}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.gen_tables}
                      </td>
                      <td className="p-2 border border-black bg-blue-500 text-white font-bold">
                        {calculateTotalT([officer])}
                      </td>
                      <td className="p-2 border border-black bg-blue-500 text-white font-bold">
                        {calculateTotal([officer])}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.breaches}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.detections}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.description}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.punter_scans}
                      </td>
                      <td className="p-2 border border-black">
                        {officer.system}
                      </td>
                      <td className="p-2 border border-black">
                        <div className="flex items-center">
                          <button
                            className="w-[80px] bg-orange-500 text-white p-2 rounded-md mr-2"
                            onClick={() => editOfficerModal(index, officer)}
                          >
                            Edit
                          </button>
                          <button className="w-[80px] bg-red-500 text-white p-2 rounded-md ">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
              )}

              <tr className="bg-blue-500 text-white font-bold">
                <td className="p-2 border border-black"></td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "cashiering").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "count").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "technical").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "security").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "slots").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "ar").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "bj").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "rpk").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "pb_bac").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "gen_tables").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "total_t").totalT}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "total").maxTotal}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "breaches").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "detections").total}
                </td>
                <td className="p-2 border border-black"></td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "punter_scans").total}
                </td>
                <td className="p-2 border border-black">
                  {calculateTotals(group, "system").total}
                </td>
                <td></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {isAddNewOfficerModalClicked && (
        <AddNewOfficerModal
          handleNewOfficerData={handleNewOfficerData}
          handleCloseModal={handleCloseModal}
        />
      )}
      {isEditOfficerModalClicked && (
        <EditOfficerModal
          initialOfficerData={selectedOfficer}
          handleUpdatedOfficerData={handleUpdatedOfficerData}
          handleCloseEditOfficerModal={handleCloseEditOfficerModal}
          index={selectedOfficer.index}
        />
      )}
    </div>
  );
};

export default Spreadsheet;
