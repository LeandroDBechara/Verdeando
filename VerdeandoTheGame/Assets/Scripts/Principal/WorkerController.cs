using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class WorkerController : MonoBehaviour
{
    //componentesUI
    public Text dineroDisp;
    public Text ecoPointDisp;
    //otros scripts
    public static WorkerController instance;

    public WorkerUI workerPrefab;
    public Transform panelWorkers;
    //variables internas

    public List<WorkerSO> listaWorkersSO;
    public List<WorkerUI> listaWorkersUI;


    // Start is called before the first frame update
    void Start()
    {


        instance = this;

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
        for (int i = 0; i < listaWorkersSO.Count; i++)
        {
            if (listaWorkersSO[i].level == 0)
            {
                listaWorkersUI[i].workerImageDisp.GetComponent<Button>().interactable = false;
                listaWorkersUI[i].tiempoSlider.interactable = false;
            }
            else
            {
                listaWorkersUI[i].workerImageDisp.GetComponent<Button>().interactable = true;
                listaWorkersUI[i].tiempoSlider.interactable = true;
            }

            if(GameController.Instance.gameSO.dinero >= CalcularCoste(i))
            {
                listaWorkersUI[i].botonCompra.interactable = true;
            }
            else
            {
                listaWorkersUI[i].botonCompra.interactable = false;
            }
        }
            dineroDisp.text = "$" + GameController.Instance.gameSO.dinero.ToString("0");
        ecoPointDisp.text = GameController.Instance.gameSO.ecoPoint.ToString("0") + " EP";
    }

    public void ContratarWorkers(int ID)
    {
        if (CalcularCoste(ID) <= GameController.Instance.gameSO.dinero)
        {
            GameController.Instance.gameSO.dinero -= CalcularCoste(ID);
            listaWorkersSO[ID].level += 1;

            UpdateWorkers();
        }
    }

    public void UpdateWorkers()
    {
        for (int i = 0;i < listaWorkersUI.Count;i++)
        {
            listaWorkersUI[i].workerLevelDisp.text = listaWorkersSO[i].level.ToString();
            listaWorkersUI[i].workerNameDisp.text = listaWorkersSO[i].workerName;
            listaWorkersUI[i].workerCostDisp.text = "Coste: " + CalcularCoste(i).ToString("0.00") + " bananas";
            listaWorkersUI[i].workerImageDisp.gameObject.GetComponent<UnityEngine.UI.Image>().sprite = listaWorkersSO[i].workerImage;
            float cantidad = listaWorkersSO[i].workerPower * listaWorkersSO[i].level;
            listaWorkersUI[i].PowerDisp.text = cantidad.ToString();
            
        }

    }

    public float CalcularCoste(int ID)
    {
        return listaWorkersSO[ID].workerBaseCost * Mathf.Pow(listaWorkersSO[ID].workerMultCost, listaWorkersSO[ID].level);
    }
    public IEnumerator Trabajar(int id)
    {

        while (listaWorkersUI[id].tiempoSlider.value != listaWorkersUI[id].tiempoSlider.maxValue)
        {

            listaWorkersUI[id].tiempoSlider.value += listaWorkersSO[id].workerTime;
            yield return new WaitForSeconds(1);
        }
      GameController.Instance.gameSO.dinero += listaWorkersSO[id].workerPower * listaWorkersSO[id].level;
        listaWorkersUI[id].tiempoSlider.value = 0;
    }
    public void Mejorar(MejoraSO mejora)
    {
        for (int i = 0; i < listaWorkersSO.Count; i++)
        {
            if (mejora.Clave == listaWorkersSO[i].Clave)
            {
                listaWorkersSO[i].workerName = mejora.mejoraName;
                listaWorkersSO[i].workerBaseCost = mejora.mejoraBaseCost;
                listaWorkersSO[i].workerMultCost = mejora.mejoraMultCost;
                listaWorkersSO[i].workerPower = mejora.mejoraPower;
                listaWorkersSO[i].workerTime = mejora.mejoraTime;
                listaWorkersSO[i].workerImage = mejora.mejoraImage;

                UpdateWorkers();
            }
        }
    }

    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
