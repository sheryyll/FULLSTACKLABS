import React from 'react';

const IssueTable = ({ issues }) => {
    return (
        <div>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                    border: "3px solid black", // thicker outer border
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: "3px solid black", padding: "10px" }}>Title</th>
                        <th style={{ border: "3px solid black", padding: "10px" }}>Description</th>
                        <th style={{ border: "3px solid black", padding: "10px" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue) => (
                        <tr key={issue.id}>
                            <td style={{ border: "3px solid black", padding: "10px" }}>{issue.title}</td>
                            <td style={{ border: "3px solid black", padding: "10px" }}>{issue.description}</td>
                            <td style={{ border: "3px solid black", padding: "10px" }}>{issue.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssueTable;
