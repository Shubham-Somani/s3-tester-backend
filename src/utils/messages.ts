const messages: { [ key:string ]: { [ key:string ]: { [ key:string ]: string } } } = {
  create: {
    success: {
      bucketList: 'Bucket listed successfully',
      bucket: 'Bucket created successfully',
      bucketDelete: 'Bucket deleted successfully',
      objectList: 'Objects listed successfully',
      objectDelete: 'Object deleted successfully'
    },
    error: {
      bucketList: 'Error listing buckets',
      bucket: 'Error creating bucket',
      bucketDelete: 'Error deleting bucket',
      objectList: 'Error listing objects',
      objectDelete: 'Error deleting object'
    }
  }
}

export {
  messages
}
