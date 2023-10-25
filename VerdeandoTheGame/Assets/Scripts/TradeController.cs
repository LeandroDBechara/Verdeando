using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TradeController : MonoBehaviour
{
    public GameController GC;

    public float rateTrading;
    public float minRateTrading;
    public float maxRateTrading;

    public Text rateTradingDisp;

    // Start is called before the first frame update
    void Start()
    {
        minRateTrading = 20;
        maxRateTrading = 50;
        rateTrading = 1000;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void VenderBananas()
    {
        if(rateTrading < GC.dinero)
        {
            GC.dinero -= rateTrading;
            GC.ecoPoint += 1;
        }
        else
        {
            GC.problemDisp.text = "No hay suficientes bananas";
            StartCoroutine(GC.VanishingProblemText());
        }
    }

    public float DecidirRate()
    {
        return Random.Range(minRateTrading, maxRateTrading);
    }
}
