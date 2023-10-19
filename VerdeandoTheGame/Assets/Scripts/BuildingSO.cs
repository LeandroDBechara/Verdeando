using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Building", menuName = "SO/Building")]
public class BuildingSO : ScriptableObject
{
    public string buildingName;
    public float buildingBaseCost;
    public float buildingMultCost;
    public float buildingSpace;
}
