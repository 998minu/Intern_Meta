import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.Name}</th>
            <th>{individualData.Email}</th>
            <th>{individualData.Message}</th>
            <th>{individualData.PhoneNumber}</th>
        </tr>
    )
}