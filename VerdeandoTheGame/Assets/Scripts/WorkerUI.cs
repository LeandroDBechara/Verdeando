using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class WorkerUI : MonoBehaviour
{
    public int workerID;
    public Text workerLevelDisp;
    public Text workerNameDisp;
    public Text workerBaseCostDisp;

    public void Contratar()
    {
        WorkerController.instance.ContratarWorkers(workerID);
    }

}
