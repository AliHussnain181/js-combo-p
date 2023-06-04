import React, { useState } from "react";

const FamilyTreeApp = () => {
  const [familyTree, setFamilyTree] = useState([]);

  const addMember = () => {
    const newMember = {
      id: Date.now(),
      name: "",
      dob: "",
      image: ""
    };
    setFamilyTree([...familyTree, newMember]);
  };

  const updateMember = (id, field, value) => {
    const updatedFamilyTree = familyTree.map((member) => {
      if (member.id === id) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setFamilyTree(updatedFamilyTree);
  };

  const removeMember = (id) => {
    const updatedFamilyTree = familyTree.filter((member) => member.id !== id);
    setFamilyTree(updatedFamilyTree);
  };

  const exportData = () => {
    const jsonData = JSON.stringify(familyTree);
    const dataBlob = new Blob([jsonData], { type: "application/json" });
    const downloadUrl = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "family-tree.json";
    link.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = event.target.result;
      const parsedData = JSON.parse(jsonData);
      setFamilyTree(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 overflow-hidden">Family Tree App</h1>
      <div className="mb-4">
        <button
          onClick={addMember}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Member
        </button>
      </div>
      {familyTree.map((member) => (
        <div key={member.id} className="mb-4">
          <div>
            <label htmlFor={`name_${member.id}`} className="font-semibold">
              Name:
            </label>
            <input
              type="text"
              id={`name_${member.id}`}
              value={member.name}
              onChange={(e) => updateMember(member.id, "name", e.target.value)}
              className="border border-gray-300 rounded p-2 ml-2"
            />
          </div>
          <div>
            <label htmlFor={`dob_${member.id}`} className="font-semibold">
              Date of Birth:
            </label>
            <input
              type="text"
              id={`dob_${member.id}`}
              value={member.dob}
              onChange={(e) => updateMember(member.id, "dob", e.target.value)}
              className="border border-gray-300 rounded p-2 ml-2"
            />
          </div>
          <div>
            <label htmlFor={`image_${member.id}`} className="font-semibold">
              Image:
            </label>
            <input
              type="text"
              id={`image_${member.id}`}
              value={member.image}
              onChange={(e) => updateMember(member.id, "image", e.target.value)}
              className="border border-gray-300 rounded p-2 ml-2"
            />
          </div>
          <button
            onClick={() => removeMember(member.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-2"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4">
        <button
          onClick={exportData}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Export Data
        </button>
        <input
          type="file"
          onChange={importData}
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default FamilyTreeApp;
