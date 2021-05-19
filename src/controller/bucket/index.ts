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

const listBucket = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.getBucketList()
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.bucketList, data, 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.bucketList, null, 500 )
  }
}

const createBucket = async (_req: any, _res: any) => {
  try {
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.createBucket({
      Bucket: _req.body.bucket,
      ACL: _req.body.acl
    })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.bucket, data, 200 )
  } catch (error) {
    return responseHandler(_res, true, error.message || messages.create.error.bucket, null, 500 )
  }
}

const deleteBucket = async (_req: any, _res: any) => {
  try { 
    const client = new AwsS3Manager(formatInitParams(_req.headers.awsparams))
    const { error, message, data } = await client.deleteBucket({ Bucket: _req.params.bucket })
    if (error) {
      return responseHandler(_res, true, message, data, 500 )
    }
    return responseHandler(_res, false, messages.create.success.bucketDelete, 'data', 200 )
  } catch (error) {
    console.log(error)
    return responseHandler(_res, true, error.message || messages.create.error.bucketDelete, null, 500 )
  }
}

export {
  listBucket,
  createBucket,
  deleteBucket
}