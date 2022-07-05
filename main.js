//Load CallApiClientSdk file --   
const script = document.createElement('script');
script.src = './callApiClientSdk.min.js';
document.head.appendChild(script);

var requestBody = {
    "From":"900012",
    "To":"sip:88888@@sipaz1.engageio.com",
    "Eml":"<Response><Say>This is Demo from Heroku Platform</Say></Response>"
}

var apiKey = {headers:{
    'apikey': "eyJ4NXQiOiJZamd5TW1GalkyRXpNVEZtWTJNMU9HRmtaalV3TnpnMVpEVmhZVGRtTnpkaU9HUmhNR1kzWmc9PSIsImtpZCI6ImFwaV9rZXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyYWRpc3lzQGNhcmJvbi5zdXBlciIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoicmFkaXN5cyIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiYXNob2stZXNtcC5jb20iLCJpZCI6OCwidXVpZCI6IjZkNTgzZWZlLThlNmItNGEwYy1hM2E5LTMyOWFhMzkzNDJmMiJ9LCJpc3MiOiJodHRwczpcL1wvYXBpbS5lbmdhZ2VkaWdpdGFsLmFpOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50Iiwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQ2FsbEFQSVByb2R1Y3QiLCJjb250ZXh0IjoiXC9hcGlcL3YxIiwicHVibGlzaGVyIjoicmFkaXN5cyIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sImlhdCI6MTY0MDEwODMxMywianRpIjoiNWNkYjY2MGUtZjY0Ni00NDNiLTk2NjgtODRlYzM5Yjk1MDRmIn0=.Uw_Unz1XU8fOpYCuCwp0wVkfSunAjGpaUZ6KsgeM5isCwPtLzjzl_73JPLLaAo7RBAOgASqpYQHICc5kJzFgw24MSNGHZ8ygO9X-GGoO9t5-QbhcXARCXDyR6XhUGBoWR_UHvVOQ5lbUdXqCE5dHw2HI5d9095Vm5-Asy9cjc4tSIZ7_ZVokmYZELU9cTrzMWei1VuM0s908PpZXBR8v13_Uskgf7CZgjUM4R2GditjRiiL4bE0wdZ0axlDacDxAmzSdED2l7whNeahxpGprCCWRNZEJ5UXPCep7vIg5ckR5vyVmfLtlLxJ1X9o4MYNBeusIvFAyARGoItOVDBhb0w=="
}}

var accountId = "AC-b88210a0-db4a-4546-835c-f2a3728e3c2a"


//Make call
async function makeCall(){
    var callApi = new window.callApiClientSdk.CallApi();
    callApi.basePath = "https://apigateway.engagedigital.ai/api/v1";
    var response = callApi.makeCall(accountId, requestBody, apiKey);
    console.log("-------Request Body --------", requestBody);
    console.log("-------Response call api--------", response);
}

async function getCallRecordsById(){
    var callId = "CR-9f89f892-d810-4b96-9ca2-be0b5a372dee" //Call Id
    var callApi = new window.callApiClientSdk.CallApi();
    callApi.basePath = "https://apigateway.engagedigital.ai/api/v1";
    var response = await callApi.getCallRecordByCallId(accountId,callId , apiKey)
    console.log("-------Get Response--------", response);

}


async function getCallRecords(){
    var StartTime = '2022-01-01'
    var EndTime = '2022-01-27'
    var Status = undefined
    var To = undefined
    var FlowType = undefined
    var Channel = undefined
    var Direction = undefined
    var Limit = 10 
    var Offset = 0 
    var CallType = undefined

    var callApi = new window.callApiClientSdk.CallApi();
    callApi.basePath = "https://apigateway.engagedigital.ai/api/v1";
    var response = await callApi.getMultipleCallRecords(accountId, To, StartTime, EndTime, Status, FlowType, Channel, Direction,CallType, Limit, Offset, apiKey)
    console.log("-------Get Response--------", response);
}

