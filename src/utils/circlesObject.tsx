interface objectArray {
  count: number,
  color: string,
}

const circlesObject: objectArray[] = [];

circlesObject.push({count: 10, color: "cyan"});
circlesObject.push({count: 10, color: "lime"});
circlesObject.push({count: 10, color: "violet"});

export default circlesObject;