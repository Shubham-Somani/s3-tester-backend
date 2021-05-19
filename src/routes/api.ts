import { Router } from 'express'
import { createBucket, listBucket, deleteBucket } from '../controller/bucket/index'
import { generateGetSignedUrl, listObjects, generatePutSignedUrl, deleteObject } from '../controller/object'

const apiRouter = Router()

/***
 * Bucket Related Routes 
***/
apiRouter.get('/bucket', listBucket)
apiRouter.post('/bucket', createBucket)
apiRouter.delete('/bucket/:bucket', deleteBucket)

/***
 * Object Related Routes 
***/
apiRouter.get('/objects/:bucket/:path', listObjects)
apiRouter.post('/objects/:bucket', listObjects)
apiRouter.delete('/objects/:bucket', deleteObject)

/***
 * Signed URL Related Routes 
***/
apiRouter.post('/get-signed-url/:bucket', generateGetSignedUrl)
apiRouter.post('/put-signed-url/:bucket', generatePutSignedUrl)


export {
  apiRouter
}