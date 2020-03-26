const commonGet = (res, sendContent) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  if (sendContent) {
    res.writeHead(200, headers)
    res.end(JSON.stringify(sendContent))
  } else {
    res.writeHead(404, headers)
    res.end(
      JSON.stringify({
        message: `Not found`,
      }),
    )
  }
}

export default commonGet
