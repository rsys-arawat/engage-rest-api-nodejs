//Load CallApiClientSdk file --   
const script = document.createElement('script');
script.src = './callApiClientSdk.min.js';
document.head.appendChild(script);

var requestBody = {
    "From":"6070707111",
    "To":"sip:demo@@sipaz1.engageio.com",
    "Eml":"<?xml version='1.0' encoding='UTF-8'?><Response><Say>This is Demo</Say></Response>"
}

var apiKey = {headers:{
    'apikey': "eyJ4NXQiOiJZamd5TW1GalkyRXpNVEZtWTJNMU9HRmtaalV3TnpnMVpEVmhZVGRtTnpkaU9HUmhNR1kzWmc9PSIsImtpZCI6ImFwaV9rZXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyYWRpc3lzQGNhcmJvbi5zdXBlciIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoicmFkaXN5cyIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiZGVtby1kay5jb20iLCJpZCI6MywidXVpZCI6IjMzNmJhZDgzLTBmODUtNDMxNy05M2NmLWI2NDgwZTgyZTNjNCJ9LCJpc3MiOiJodHRwczpcL1wvYXBpbS5lbmdhZ2VkaWdpdGFsLmFpOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50Iiwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQ2FsbEFQSVByb2R1Y3QiLCJjb250ZXh0IjoiXC9hcGlcL3YxIiwicHVibGlzaGVyIjoicmFkaXN5cyIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sImlhdCI6MTY0MDA5NzI1NCwianRpIjoiNThjOGNjYTctMDFlNi00ZWQ0LThkMTEtYmE2OGM2MGI1YjQ4In0=.hbuhNmUMdFNX1j-tto8Fj4QPI3JllUkX6EOYw9DH6aGn0Z7yB8Ks4N9YJIOEoq7l-6fLhamqXfOx3uHDUe5aCLxqhnm3xElUQn-TFR7s7vsYV7AS4wgsCIvaSZvUy47ZTh-m3iwGfsPbIzm5QB_13_De84GicC-8Um7tAwnYWMsUoGfKFzb8KtZ_IBIhc8mnY38IuG5Nf4DF7oQv7jOL8GFXJ1BCs1hMQQJBahxRfYTyOVCmCA8hsA_K2Xh2GbJDPcCC13KeU_ExgtAxzAnLDUHzEfTWWQ4ISm3rP6CeyxxoIMhzUPnWN5BPbjZ_WGV8gIO4rABZKFz2v-XVjER9mQ=="
}}

var accountId = "AC-4cf92d2a-b9ce-4da4-a05e-66239504e5ab"


//Make call
async function makeCall(){
    var callApi = new window.callApiClientSdk.CallApi();
    callApi.basePath = "https://apigateway.engagedigital.ai/api/v1";
    var response = callApi.makeCall(accountId, requestBody, apiKey);
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

