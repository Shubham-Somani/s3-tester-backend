import { AwsS3Manager } from 'aws-s3-manager' ;
import { responseHandler } from '../../utils/responseHandler'
import { messages } from '../../utils/messages'

const formatInitParams = (header: string) => {
  const decodedParams = JSON.parse(Buffer.from(header, 'base64').toString())
  return {
    region: decodedParams.region,
    identityPoolId: decodedParams.identityPoolId,
    accessKeyId: decodedParams.accessKeyId,
    secretAccessKey: decodedParams.secretAccessKey,
    type: decodedParams.type
  }
}

const listObjects = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.getObjectList({
      Bucket: _req.params.bucket,
      Delimiter: `/`,
      Prefix: _req.body.path
    })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.objectList, data, 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.objectList, null, 500 )
  }
}

const deleteObject = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.deleteObject({
      Bucket: _req.params.bucket,
      Key: _req.body.path
    })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.objectDelete, data, 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.objectDelete, null, 500 )
  }
}

const generateGetSignedUrl = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.getPresignedUrl({
      Bucket: _req.params.bucket,
      Key: _req.body.path,
      ResponseContentDisposition: _req.body.responseContentDisposition || ''
    })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.objectList, data, 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.objectList, null, 500 )
  }
}

const generatePutSignedUrl = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.putPresignedUrl({
      Bucket: _req.params.bucket,
      Key: _req.body.path,
      ACL: ''
    })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.objectList, data, 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.objectList, null, 500 )
  }
}

export {
  listObjects,
  deleteObject,
  generateGetSignedUrl,
  generatePutSignedUrl
}