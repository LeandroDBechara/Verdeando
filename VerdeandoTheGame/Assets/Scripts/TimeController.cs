using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TimeController : MonoBehaviour
{
    public GameController GC;
    public string[] dayNames;
    public int horas;
    public int numDay;

    public Text dayNamesDisp;

    // Start is called before the first frame update
    void Start()
    {
        dayNames = new string[] { "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado","Domingo"};
        StartCoroutine(PasarTiempo());
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public IEnumerator PasarTiempo()
    {
        while (true)
        {
            horas += 1;
            if(horas == 24) 
            {
                horas = 0;
                numDay += 1;
                if(numDay == 7)
                {
                    numDay = 0;
                    GC.TradeC.rateTrading = GC.TradeC.DecidirRate();
                    GC.TradeC.rateTradingDisp.text = GC.TradeC.rateTrading.ToString("0.00");
                }
            }

            dayNamesDisp.text = dayNames[numDay];

            yield return new WaitForSeconds(1);
        }
    }
}
