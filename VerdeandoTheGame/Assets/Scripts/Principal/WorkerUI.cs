using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class WorkerUI : MonoBehaviour
{
    public int workerID;
    public Text workerLevelDisp;
    public Text workerNameDisp;
    public Text workerCostDisp;
    public UnityEngine.UI.Image workerImageDisp;
    public Text PowerDisp;
    public UnityEngine.UI.Slider tiempoSlider;
    public UnityEngine.UI.Button botonCompra;
    public void Contratar()
    {
        WorkerController.instance.ContratarWorkers(workerID);
    }

    public void Laburo()
    {
        StartCoroutine(WorkerController.instance.Trabajar(workerID));
    }

}
