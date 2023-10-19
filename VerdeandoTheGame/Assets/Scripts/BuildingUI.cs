using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BuildingUI : MonoBehaviour
{
    public int buildingID;
    public Text buildingLevelDisp;
    public Text buildingNameDisp;
    public Text buildingBaseCostDisp;

    public void Construir()
    {
        BuildingController.instance.ConstruirBuilding(buildingID);
    }
}
