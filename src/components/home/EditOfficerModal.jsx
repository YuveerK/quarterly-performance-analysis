import React, { useState } from "react";

const EditOfficerModal = ({
  handleUpdatedOfficerData,
  handleCloseEditOfficerModal,
  initialOfficerData,
  index,
}) => {
  const [data, setData] = useState(initialOfficerData.officer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "description" ? value : parseInt(value);
    setData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const addNewOfficer = () => {
    handleUpdatedOfficerData({ data, index });
    handleCloseEditOfficerModal(false);
  };

  const closeModal = () => {
    handleCloseEditOfficerModal(false);
  };
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-black/50 flex items-center justify-center">
      <div className="w-2/4 h-3/4 p-4 overflow-y-scroll bg-white rounded-md shadow-md">
        <div className="w-full flex items-center justify-end">
          <button
            className="p-2 rounded-md bg-red-500 text-white"
            onClick={() => handleCloseEditOfficerModal(false)}
          >
            Close
          </button>
        </div>
        <h1 className="text-center font-bold text-2xl">Edit Officer</h1>
        <div className="p-4">
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="group"
            >
              Group
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="text"
              id="group"
              name="group"
              value={data.group}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="officer"
            >
              Officer
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="text"
              id="officer"
              name="officer"
              value={data.officer}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="cashiering"
            >
              Cashiering
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="cashiering"
              name="cashiering"
              value={data.cashiering}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="count"
            >
              Count
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="count"
              name="count"
              value={data.count}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="technical"
            >
              Technical
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="technical"
              name="technical"
              value={data.technical}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="security"
            >
              Security
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="security"
              name="security"
              value={data.security}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="slots"
            >
              Slots
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="slots"
              name="slots"
              value={data.slots}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="ar"
            >
              AR
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="ar"
              name="ar"
              value={data.ar}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="bj"
            >
              BJ
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="bj"
              name="bj"
              value={data.bj}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="rpk"
            >
              RPK
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="rpk"
              name="rpk"
              value={data.rpk}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="pb_bac"
            >
              PB_BAC
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="pb_bac"
              name="pb_bac"
              value={data.pb_bac}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="gen_tables"
            >
              Gen_Tables
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="gen_tables"
              name="gen_tables"
              value={data.gen_tables}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="breaches"
            >
              Breaches
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="breaches"
              name="breaches"
              value={data.breaches}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="detections"
            >
              Detections
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="detections"
              name="detections"
              value={data.detections}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="punter_scans"
            >
              Punter_Scans
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="punter_scans"
              name="punter_scans"
              value={data.punter_scans}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-1"
              htmlFor="system"
            >
              System
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              type="number"
              id="system"
              name="system"
              value={data.system}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="w-[150px] mb-8 bg-green-500 text-white p-2 rounded-md"
          onClick={() => addNewOfficer()}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditOfficerModal;
