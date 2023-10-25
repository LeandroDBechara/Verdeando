using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
public class WorkerController : MonoBehaviour
{
    //otros scripts
    public GameController GC;
    public static WorkerController instance;

    public WorkerUI workerPrefab;
    public Transform panelWorkers;
    //variables internas

    public List<WorkerSO> listaWorkersSO;
    public List<WorkerUI> listaWorkersUI;

    public List<int> workerLevel;

    public string workerName;
    public float workerBaseCost;
    public float workerMultCost;
    public float workerPower;
    public Image workerImage;

    public Text workerLevelDisp;
    public Text workerNameDisp;
    public Text workerBaseCostDisp;
    



    // Start is called before the first frame update
    void Start()
    {
        instance = this;

        workerLevel = new int[listaWorkersSO.Count].ToList();

        for(int i = 0; i < listaWorkersSO.Count; i++) 
        {
            WorkerUI worker = Instantiate(workerPrefab, panelWorkers);
            worker.workerID = i;
            listaWorkersUI.Add(worker);
        }

        UpdateWorkers();
    }

    // Update is called once per frame
    void Update()
    {
        for(int i = 0;i < listaWorkersSO.Count;i++) 
        {
            GC.dinero += listaWorkersSO[i].workerPower * workerLevel[i]; 
        }
    }

    public void ContratarWorkers(int ID)
    {
        if (CalcularCoste(ID) <= GC.dinero)
        {
            GC.dinero -= CalcularCoste(ID);
            workerLevel[ID] += 1;
            GC.problemDisp.text = "otro" + listaWorkersSO[ID].workerName + "laburante";

            StartCoroutine(GC.VanishingProblemText());

            UpdateWorkers();
        }
        else
        {
            GC.problemDisp.text = "No hay sufucientes bananas";
            StartCoroutine(GC.VanishingProblemText());
        }
    }

    public void UpdateWorkers()
    {
        for (int i = 0;i < listaWorkersUI.Count;i++)
        {
            listaWorkersUI[i].workerLevelDisp.text = workerLevel[i].ToString();
            listaWorkersUI[i].workerNameDisp.text = listaWorkersSO[i].workerName;
            listaWorkersUI[i].workerBaseCostDisp.text = "Coste: " + CalcularCoste(i).ToString("0.00") + " bananas";
            GC.dps += listaWorkersSO[i].workerPower * workerLevel[i];
        }

    }

    public float CalcularCoste(int ID)
    {
        return listaWorkersSO[ID].workerBaseCost * Mathf.Pow(listaWorkersSO[ID].workerMultCost, workerLevel[ID]);
    }
}
