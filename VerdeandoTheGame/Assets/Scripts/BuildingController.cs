using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class BuildingController : MonoBehaviour
{
    //otros scripts
    public GameController GC;
    public static BuildingController instance;

    public BuildingUI buildingPrefab;
    public Transform panelBuilding;
    //variables internas

    public List<BuildingSO> listaBuildingSO;
    public List<BuildingUI> listaBuildingUI;

    public List<int> buildingLevel;

    public string buildingName;
    public float buildingBaseCost;
    public float buildingMultCost;
    public float buildingPower;

    public Text buildingLevelDisp;
    public Text buildingNameDisp;
    public Text buildingBaseCostDisp;




    // Start is called before the first frame update
    void Start()
    {
        instance = this;

        buildingLevel = new int[listaBuildingSO.Count].ToList();

        for (int i = 0; i < listaBuildingSO.Count; i++)
        {
            BuildingUI building = Instantiate(buildingPrefab, panelBuilding);
            building.buildingID = i;
            listaBuildingUI.Add(building);
        }

        UpdateBuilding();
    }

    // Update is called once per frame
    void Update()
    {
 
    }

    public void ConstruirBuilding(int ID)
    {
        if (CalcularCoste(ID) <= GC.ecoPoint)
        {
            GC.ecoPoint -= CalcularCoste(ID);
            buildingLevel[ID] += 1;
            GC.limiteBananas += listaBuildingSO[ID].buildingSpace;
            GC.problemDisp.text = "otro" + listaBuildingSO[ID].buildingName + "laburante";

            StartCoroutine(GC.VanishingProblemText());

            UpdateBuilding();
        }
        else
        {
            GC.problemDisp.text = "No hay sufuciente oro";
            StartCoroutine(GC.VanishingProblemText());
        }
    }

    public void UpdateBuilding()
    {
        for (int i = 0; i < listaBuildingUI.Count; i++)
        {
            listaBuildingUI[i].buildingLevelDisp.text = buildingLevel[i].ToString();
            listaBuildingUI[i].buildingNameDisp.text = listaBuildingSO[i].buildingName;
            listaBuildingUI[i].buildingBaseCostDisp.text = "Coste: " + CalcularCoste(i).ToString("0.00") + " bananas";
            GC.dps += listaBuildingSO[i].buildingSpace * buildingLevel[i];
        }

    }

    public float CalcularCoste(int ID)
    {
        return listaBuildingSO[ID].buildingBaseCost * Mathf.Pow(listaBuildingSO[ID].buildingMultCost, buildingLevel[ID]);
    }
}
